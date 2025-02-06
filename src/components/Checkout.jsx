import { useState, useContext } from "react";
import { Card, TextInput, Button, Alert } from "flowbite-react";
import { CartContext } from "./CartContext";
import { createOrder, updateProductStock } from "../../database";
import { HiCheck } from "react-icons/hi";

function Checkout() {
  const { cartItems, getTotalPrice, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    phone: "",
    email: "",
    emailConfirm: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (formData.email !== formData.emailConfirm) {
      setError("Los emails no coinciden");
      setLoading(false);
      return;
    }

    try {
      const order = {
        buyer: {
          name: `${formData.name} ${formData.lastName}`,
          phone: formData.phone,
          email: formData.email,
        },
        items: cartItems.map((item) => ({
          id: item.id,
          title: item.title,
          quantity: item.count,
          price: item.price,
        })),
        date: new Date(),
        total: getTotalPrice(),
      };

      const newOrderId = await createOrder(order);
      await Promise.all(
        cartItems.map((item) => updateProductStock(item.id, item.count))
      );

      setOrderId(newOrderId);
      clearCart();
    } catch (err) {
      setError("Error al procesar la orden. Por favor intente nuevamente.");
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  if (orderId) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card>
          <div className="text-center">
            <div className="flex justify-center">
              <div className="rounded-full bg-green-100 p-3">
                <HiCheck className="h-8 w-8 text-green-600" />
              </div>
            </div>
            <h2 className="mt-4 text-2xl font-bold text-gray-900">
              ¡Gracias por tu compra!
            </h2>
            <p className="mt-2 text-gray-600">Tu número de orden es:</p>
            <p className="mt-1 font-mono text-lg font-bold text-blue-600">
              {orderId}
            </p>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <h2 className="text-xl font-bold mb-4">Datos de contacto</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <TextInput
                name="name"
                placeholder="Nombre"
                required
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <TextInput
                name="lastName"
                placeholder="Apellido"
                required
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <TextInput
                name="phone"
                type="tel"
                placeholder="Teléfono"
                required
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <TextInput
                name="email"
                type="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <TextInput
                name="emailConfirm"
                type="email"
                placeholder="Confirmar Email"
                required
                value={formData.emailConfirm}
                onChange={handleInputChange}
              />
            </div>
            {error && <Alert color="failure">{error}</Alert>}
            <Button
              type="submit"
              gradientDuoTone="purpleToBlue"
              disabled={loading}
              className="w-full"
            >
              {loading ? "Procesando..." : "Confirmar Compra"}
            </Button>
          </form>
        </Card>

        <Card>
          <h2 className="text-xl font-bold mb-4">Resumen de compra</h2>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-gray-600">
                    Cantidad: {item.count}
                  </p>
                </div>
                <p className="font-medium">${item.price * item.count}</p>
              </div>
            ))}
            <div className="border-t pt-4">
              <div className="flex justify-between items-center">
                <span className="font-bold">Total:</span>
                <span className="font-bold text-lg">${getTotalPrice()}</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Checkout;

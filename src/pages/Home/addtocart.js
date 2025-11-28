import React, { useState } from 'react';
import { ShoppingCart, Plus, Minus,  ArrowLeft, X } from 'lucide-react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from '../../components/Layouts/Header';
import Footer from '../../components/Layouts/Footer';

export default function Addtocart() {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Classic Burger', description: 'Beef patty with cheese, lettuce, tomato', price: 6.99, quantity: 2, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=120&h=120&fit=crop' },
        { id: 2, name: 'Chicken Burger', description: 'Grilled chicken with special sauce', price: 7.49, quantity: 1, image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=120&h=120&fit=crop' },
        { id: 3, name: 'Onion Burger', description: 'Double patty with crispy onion rings', price: 8.99, quantity: 1, image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=120&h=120&fit=crop' },
    ]);

    const updateQuantity = (id, change) => {
        setCartItems(items => items.map(item =>
            item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
        ));
    };

    const removeItem = (id) => {
        setCartItems(items => items.filter(item => item.id !== id));
    };

    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.1;
    const delivery = 2.99;
    const total = subtotal + tax + delivery;

    return (
        <div style={{ minHeight: 'auto', backgroundColor: '#585555ff', fontFamily: "'Poppins', sans-serif" }}>
            
            <Header/>

            {/* Main Content */}
            <div style={{ padding: '40px 50px', maxWidth: '1400px', margin: '0 auto'}}>
                {/* Back Button & Title */}
                <div style={{ marginBottom: '30px' }}>
                    <button style={{ background: 'none', border: 'none', color: '#f5a623', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', marginBottom: '20px', fontSize: '16px' }}>
                        <ArrowLeft size={20} /> Continue Shopping
                    </button>
                    <h1 style={{ color: 'white', fontSize: '42px', fontWeight: 'bold', marginTop:"80px" }}>YOUR <span style={{ color: '#f5a623' }}>CART</span></h1>
                    <p style={{ color: '#888', marginTop: '5px' }}>{cartItems.length} items in your cart</p>
                </div>

                <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
                    {/* Cart Items */}
                    <div style={{ flex: '1', minWidth: '500px' }}>
                        {cartItems.length === 0 ? (
                            <div style={{ backgroundColor: '#2d2d2d', borderRadius: '15px', padding: '60px', textAlign: 'center' }}>
                                <ShoppingCart size={80} color="#555" style={{ marginBottom: '20px' }} />
                                <h3 style={{ color: 'white', marginBottom: '10px' }}>Your cart is empty</h3>
                                <p style={{ color: '#888' }}>Add some delicious burgers to get started!</p>
                            </div>
                        ) : (
                            cartItems.map(item => (
                                <div key={item.id} style={{ backgroundColor: '#2d2d2d', borderRadius: '15px', padding: '20px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '20px', position: 'relative' }}>
                                    <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px', borderRadius: '12px', objectFit: 'cover' }} />
                                    <div style={{ flex: '1' }}>
                                        <h3 style={{ color: 'white', margin: '0 0 5px 0', fontSize: '20px' }}>{item.name}</h3>
                                        <p style={{ color: '#888', margin: '0 0 10px 0', fontSize: '14px' }}>{item.description}</p>
                                        <span style={{ color: '#f5a623', fontSize: '22px', fontWeight: 'bold' }}>${item.price.toFixed(2)}</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', backgroundColor: '#1a1a1a', borderRadius: '30px', padding: '8px 15px' }}>
                                        <button onClick={() => updateQuantity(item.id, -1)} style={{ background: 'none', border: 'none', color: '#f5a623', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                                            <Minus size={18} />
                                        </button>
                                        <span style={{ color: 'white', fontSize: '18px', fontWeight: 'bold', minWidth: '30px', textAlign: 'center' }}>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, 1)} style={{ background: 'none', border: 'none', color: '#f5a623', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                                            <Plus size={18} />
                                        </button>
                                    </div>
                                    <div style={{ textAlign: 'right', minWidth: '80px' }}>
                                        <p style={{ color: 'white', fontSize: '20px', fontWeight: 'bold', margin: 0 }}>${(item.price * item.quantity).toFixed(2)}</p>
                                    </div>
                                    <button onClick={() => removeItem(item.id)} style={{ position: 'absolute', top: '15px', right: '15px', background: 'none', border: 'none', color: '#ff4444', cursor: 'pointer' }}>
                                        <X size={20} />
                                    </button>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Order Summary */}
                    <div style={{ width: '380px' }}>
                        <div style={{ backgroundColor: '#2d2d2d', borderRadius: '15px', padding: '30px', position: 'sticky', top: '20px' }}>
                            <h3 style={{ color: 'white', fontSize: '24px', marginBottom: '25px', fontWeight: 'bold' }}>Order Summary</h3>

                            <div style={{ borderBottom: '1px solid #444', paddingBottom: '20px', marginBottom: '20px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                                    <span style={{ color: '#888' }}>Subtotal</span>
                                    <span style={{ color: 'white' }}>${subtotal.toFixed(2)}</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                                    <span style={{ color: '#888' }}>Tax (10%)</span>
                                    <span style={{ color: 'white' }}>${tax.toFixed(2)}</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span style={{ color: '#888' }}>Delivery</span>
                                    <span style={{ color: 'white' }}>${delivery.toFixed(2)}</span>
                                </div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '25px' }}>
                                <span style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>Total</span>
                                <span style={{ color: '#f5a623', fontSize: '24px', fontWeight: 'bold' }}>${total.toFixed(2)}</span>
                            </div>

                            {/* Promo Code */}
                            <div style={{ marginBottom: '20px' }}>
                                <div style={{ display: 'flex', gap: '10px' }}>
                                    <input type="text" placeholder="Promo code" style={{ flex: '1', padding: '12px 15px', borderRadius: '8px', border: 'none', backgroundColor: '#1a1a1a', color: 'white', fontSize: '14px' }} />
                                    <button style={{ padding: '12px 20px', backgroundColor: 'transparent', border: '2px solid #f5a623', color: '#f5a623', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>Apply</button>
                                </div>
                            </div>

                            <button style={{ width: '100%', padding: '16px', backgroundColor: '#f5a623', color: 'black', border: 'none', borderRadius: '8px', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.3s' }}>
                                CHECKOUT NOW
                            </button>

                            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '15px' }}>
                                {['💳', '🏦', '📱'].map((icon, i) => (
                                    <span key={i} style={{ fontSize: '24px', opacity: 0.7 }}>{icon}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recommended Items */}
                <div style={{ marginTop: '50px' }}>
                    <h2 style={{ color: 'white', fontSize: '28px', marginBottom: '25px' }}>You might also <span style={{ color: '#f5a623' }}>like</span></h2>
                    <div style={{ display: 'flex', gap: '20px', overflowX: 'auto', paddingBottom: '10px' }}>
                        {[
                            { name: 'Cheese Fries', price: 4.99, img: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=200&h=150&fit=crop' },
                            { name: 'Onion Rings', price: 3.99, img: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=200&h=150&fit=crop' },
                            { name: 'Cola Drink', price: 1.99, img: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=200&h=150&fit=crop' },
                            { name: 'Milkshake', price: 4.49, img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=200&h=150&fit=crop' },
                        ].map((item, i) => (
                            <div key={i} style={{ backgroundColor: '#2d2d2d', borderRadius: '15px', padding: '15px', minWidth: '200px', cursor: 'pointer', transition: 'transform 0.3s' }}>
                                <img src={item.img} alt={item.name} style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '10px', marginBottom: '12px' }} />
                                <h4 style={{ color: 'white', margin: '0 0 5px 0', fontSize: '16px' }}>{item.name}</h4>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ color: '#f5a623', fontWeight: 'bold' }}>${item.price}</span>
                                    <button style={{ backgroundColor: '#f5a623', border: 'none', borderRadius: '50%', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                                        <Plus size={16} color="black" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
        
    );
}
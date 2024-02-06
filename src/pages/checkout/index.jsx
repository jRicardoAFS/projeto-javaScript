import NavBar from "../../components/navbar";
import './style.css'
import { CartContext } from "../../contexts/cart-context";
import { useContext } from "react";

const Checkout = () => {
    const { totalCart } = useContext(CartContext)
    return (
        <>
            <NavBar />
            <div className="container">
                <div className="titulo text-center">
                    <h1>Finalizar Pedido</h1>
                </div>

                <div className="col-3">
                    <div className="box-checkout">
                        <h3>Dados Pessoais</h3>
                        <div className="input-group">
                            <p>Nome Completo</p>
                            <input type="text" id="nome" />
                        </div>
                        <div className="input-group">
                            <p>Email</p>
                            <input type="text" id="nome" />
                        </div>
                        <div className="input-group">
                            <p>Telefone</p>
                            <input type="text" id="nome" />
                        </div>
                    </div>
                </div>

                <div className="col-3">
                    <div className="box-checkout">
                        <h3>Dados De Entrega</h3>
                        <div className="input-group">
                            <p>Bairro</p>
                            <input type="text" id="nome" />
                        </div>
                        <div className="input-group">
                            <p>Rua</p>
                            <input type="text" id="nome" />
                        </div>
                        <div className="input-group">
                            <p>Numeração Da Casa</p>
                            <input type="text" id="nome" />
                        </div>
                        <div className="input-group">
                            <p>Ponto De Referência</p>
                            <input type="text" id="nome" />
                        </div>

                    </div>
                </div>

                <div className="col-3">
                    <div className="box-checkout">
                        <h3>Valores</h3>

                        <div className="checkout-valores">
                            <span>Total</span>
                            <span>
                                <strong>{new Intl.NumberFormat('pt-BR',
                                { style: 'currency', currency: "BRL" }).format(totalCart)}
                            </strong>
                            </span>
                        </div>
                        <div className="checkout-button">
                            <button className="btn-checkout">
                                Finalizar Pedido
                            </button>
                        </div>
                    </div>
                </div>

            </div>



        </>
    )
}
export default Checkout;
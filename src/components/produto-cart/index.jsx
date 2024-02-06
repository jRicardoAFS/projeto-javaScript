import './style.css'
import { CartContext } from '../../contexts/cart-context';
import { useContext } from 'react';

const ProdutoCart = (props) => {

    const { AddItemCart, RemoveItemCart } = useContext(CartContext);
    const AddItem = () => {
        const item = {

            id: props.id,
            nome: props.nome,
            preco: props.preco,
            foto: props.foto,
            quantidade: 1
        }
        AddItemCart(item);

    }
    const RemoveItem = () => {
        RemoveItemCart(props.id)
    }

    return <div className='produto-cart-box'>
        <img src={props.foto} alt="foto" />
        <div>
            <p className='produto-cart-nome'>{props.nome}</p>
            <p className='produto-cart-valor'>{new Intl.NumberFormat('pt-BR',
                { style: 'currency', currency: "BRL" }).format(props.preco)}
            </p>
            <div className="footer-produto-cart">
                <div >
                    <button onClick={RemoveItem} className='footer-produto-btn'> - </button>
                    <span className='footer-quantidade-produto'>{props.quantidade}</span>
                    <button onClick={AddItem} className='footer-produto-btn'> + </button>
                </div>
                <p className='footer-preco-produto text-right'>{new Intl.NumberFormat('pt-BR',
                    { style: 'currency', currency: "BRL" }).format(props.preco * props.quantidade)}</p>
            </div>
        </div>
    </div>
}
export default ProdutoCart;
import './style.css'
import bag from '../../assets/bag-preta.png'
import { CartContext } from '../../contexts/cart-context'
import { useContext } from 'react'

const ProdutoVitrine = (props) => {

    const { AddItemCart } = useContext(CartContext);
    const AddItem = () => {
        const item = {
            id: props.id,
            nome: props.nome,
            preco: props.preco,
            foto: props.foto,
            quantidade: 1

        }
        AddItemCart(item);
    };

    return <div className='produto-box text-center'>
        <img src={props.foto} alt="foto" />
        <div>
            <h2>{props.nome}</h2>
            <p className='prod-vitrine-descricao'>{props.descricao}</p>
            <p className='prod-vitrine-preco'>{new Intl.NumberFormat('pt-BR',
                { style: 'currency', currency: "BRL" }).format(props.preco)}</p>
        </div>
        <div>
            <button
                onClick={AddItem}
                className='btn btn-cart'
            >
                <img
                    src={bag}
                    className='icon' />
                Adicionar
            </button>
        </div>
    </div>
}
export default ProdutoVitrine;
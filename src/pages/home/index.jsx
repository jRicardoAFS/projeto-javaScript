import NavBar from "../../components/navbar";
import ProdutoVitrine from "../../components/produto-vitrine";
import { produtos } from "../../dados";
const Home = () => {
    return (
        <>
            <NavBar showMenu={true} />
            <div className="container">
                <div className="titulo text-center">
                    <h1>Nosso Cardápio</h1>
                    <p className="subtitulo"> Clique em adicionar para colocar os produtos na sacola de compras. Se preferir, você pode pedir pelo WhatsApp: (99) 99999-9999</p>
                </div>
            </div>
            <div className="text-center">
                {
                    produtos.map((prod) => {
                        return <ProdutoVitrine
                            key={prod.id}
                            id={prod.id}
                            nome={prod.nome}
                            descricao={prod.descricao}
                            preco={prod.preco}
                            foto={prod.foto}
                        />

                    })
                }

            </div>


        </>
    )
}
export default Home;
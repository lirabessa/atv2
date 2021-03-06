/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'


type props = {
    tema: string
}

export default class ListaProduto extends Component<props> {
    render() {
        let estilo = `collection-item active deep-purple darken-3 ${this.props.tema}`
        return (
            <div className="containerProd">
                <div className="collection">
                    <a className="collection-item">Produto 1</a>
                    <a className={estilo}>Produto 2</a>
                    <a className="collection-item">Produto 3</a>
                    <a className="collection-item">Produto 4</a>
                </div>
            </div>
        )
    }
}
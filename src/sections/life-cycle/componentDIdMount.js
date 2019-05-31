import React ,{Component} from 'react'

class EjemploComponentDidMount extends Component{
    constructor(props){
        console.log('contructor')
        super(props)
        this.state={}
    }
    componentWillMount(){
        console.log('componentWillMount')
    }
    componentDidMount(){
        console.log('componentDidMount')
        document.addEventListener('scroll', () =>{
            this.setState({scroll:window.screenY})
        })
    }
    render(){
        console.log('render')
        return(
            <div>
                <h4>Ciclo montaje: componentDidMount</h4>
                <p>este es un componente que nos muestra como podemos usar el componentDidMount</p>
                <p>Como queremos añadir un evento scroll, vamos a hacer que la ventana sea lo suficientemente grande.</p>
                <p>Lorem fistrum benemeritaar condemor...</p>
                <p>fistro hasta luego Lucas se te va hase</p>
            </div>
        )
    }
}
export default EjemploComponentDidMount
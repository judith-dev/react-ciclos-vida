import React,{Component} from 'react'

const HelloRender = (props) => <h1> hola render!</h1>

class Render extends Component{
    constructor(props){
        console.log('constructor');
        super(props)
        this.state =  {mensaje :'mensaje incial'}
    }
    componentWillMount = () => {
      console.log('componentewilmount')
    };
    render(){
        console.log('render')
        return[
            <h1 key='A'>Primer elemento</h1>,
            <HelloRender key='B'></HelloRender>,
            <HelloRender key = 'C'></HelloRender>,
            <h3 key='D'>Cuarto elemento</h3>
        ]
    }
}
export default Render;
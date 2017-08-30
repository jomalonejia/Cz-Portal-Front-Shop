import React,{Component} from 'react'
import Loadable from 'react-loadable'
import Loading from '../../components/loading'


const asyncComponent = componentUrl => (
    class AsyncComponent extends Component {
        render(){

         const LoadableComponent = Loadable({
            loader: () => import(componentUrl),
            loading: Loading,
            delay: 300
          });
          return (
            <LoadableComponent/>
          )
        }

    }
);

export default asyncComponent;
import React from 'react';
import logo from './logo.svg';
import './App.css';
import SwaggerEditor from "swagger-editor"
import 'swagger-editor/dist/swagger-editor.css';
declare global {
  interface Window { editor: any; }
}
class App extends React.Component{

  componentDidMount(){
    window.editor = SwaggerEditor({
      dom_id: '#swagger-editor',
      layout: 'EditorLayout',
      // plugins: Object.values(plugins),
      swagger2GeneratorUrl: 'https://generator.swagger.io/api/swagger.json',
      oas3GeneratorUrl: 'https://generator3.swagger.io/openapi.json',
      swagger2ConverterUrl: 'https://converter.swagger.io/api/convert',
  });
  }
  render(){
    return (
      <div id='swagger-editor'></div>
    )
  }
}

export default App;

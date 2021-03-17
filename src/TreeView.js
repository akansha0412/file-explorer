import React, { Component,props } from "react";
import "./Treeview.css"

class TreeView extends Component {
	constructor() {
    super(props);

    this.state = {
      
    };
}
    onClick = (e)=>{
    	
    	this.props.setSelected(e.target.getAttribute('value'))
    }

  render() {
  	const {folders} = this.props;
    return (
      <div name="TreeView">
      <div className="fav">Favourites
      {folders.map((folder)=>{
      	return <span className={this.props.selected === folder ? 'selected':null} onClick ={this.onClick} value={folder}> {folder}</span>
      })}
      
       </div>
       <div className="fav">Icloud
      <span className={this.props.selected === 'icloud Drive' ? 'selected':null} onClick ={this.onClick} value='icloud Drive'> icloud Drive</span>
      <span className={this.props.selected === 'Documents' ? 'selected':null} onClick ={this.onClick} value='Documents'> Documents </span>
       <span className={this.props.selected === 'Desktop' ? 'selected':null} onClick ={this.onClick} value ='Desktop'> Desktop </span>

       </div>
        </div>
    );
  }
}

export default TreeView;
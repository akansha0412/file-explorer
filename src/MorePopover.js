import React, { Component,props } from "react";
import "./Morepopover.css"

class MorePopover extends Component {
	constructor() {
    super(props);

    this.state = {
      modal:''
    };
}
   onCreate=()=>{
    this.setState({modal:'create'})
   }
    
   onClick=()=>{
    this.props.onCreate(this.refs.val.value);
     this.setState({modal:''})
   }
  render() {
    console.log(this.props.showPopover)

    return (
     
      <React.Fragment>
      {this.props.showPopover ? (
        <div onClick={this.props.closeContextMenu}>
        <div name="MorePopover" style={{top:this.props.showPopover.screenY,left:this.props.showPopover.screenX + this.props.showPopover.screenY}} >
      
        <React.Fragment>
       <span onClick={this.onCreate}> Create </span>
       <div name="Separator" className="Separator"></div>
       <span onClick={this.props.onDelete}> Delete </span>
       
       </React.Fragment>
     </div>
        
        </div>)
       : null}
       {this.state.modal == 'create' ? <div className="createModal">
       <input ref='val' type='text' placeholder='new name'/>
       <button onClick={this.onClick}>Submit </button></div>:null}
       
       
       </React.Fragment>
       
    );
  }
}

export default MorePopover;
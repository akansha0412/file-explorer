import React, { Component,props } from "react";
import MorePopover from "./MorePopover"
import folder from "./Folder-icon.png";
import "./View.css"
class View extends Component {
	constructor() {
    super(props);

    this.state = {
      showContextMenu:false
    };
}
    onContextMenuClick =(e)=>{
      e.preventDefault();
      const x = e.clientX;
      const y = e.clientY;
      this.setState({
        showContextMenu: {
          screenX: x,
          screenY: y
        }
      });
    }
 closeContextMenu = () => {
    
    this.setState({ showContextMenu: false });
  };
  onDelete = ()=>{
    this.props.onDelete(this.props.selected);
    this.closeContextMenu()
  }
  onCreate=(val)=>{
this.props.onCreate(val);
this.closeContextMenu()
  }
  
  render() {
    return (
      <div name="View" onContextMenu={(e) => this.onContextMenuClick(e)} >
<div className="folderDiv">
      <img src={folder}/>
       <span className='folderName'>{this.props.selected}</span>
       </div>
      
      {this.props.selected !='Desktop' && this.props.selected !='icloud Drive' && this.props.selected !='Documents' ?  <MorePopover
          ref={(morePopNode) => (this._morePopup = morePopNode)}
          showPopover={this.state.showContextMenu}
          closeContextMenu={this.closeContextMenu}
          onCreate={this.onCreate}
          onDelete={this.onDelete}
          

        /> : null}
        </div>
    );
  }
}

export default View;
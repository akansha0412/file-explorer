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
  onCreate=()=>{
this.props.onCreate();
this.closeContextMenu()
  }
  render() {
    return (
      <div name="View" onContextMenu={(e) => this.onContextMenuClick(e)} >
<div className="folderDiv">
      <img src={folder}/>
       <s
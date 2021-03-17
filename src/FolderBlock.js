import React, { Component ,props} from "react";
import TreeView from "./TreeView";
 import View from "./View";
import "./Folderblock.css"
class FolderBlock extends Component {
	constructor() {
    super(props);

    this.state = {
      selected:'Music',
      folders:['Music','Movies','Downloads','Pictures','Airdrop']
    };
}
setSelected = (val)=>{
	console.log(val)
this.setState({selected:val})
}
onDelete = (val)=>{
	let folders = this.state.folders
	var index = folders.indexOf(val);
	if (index !== -1) {
	  folders.splice(index, 1);
	}
	this.setState({folders:folders,selected:folders[0]})
}
onCreate = (val) =>{
	let folders = this.state.folders
	folders.push(val)
	this.setState({folders:folders,selected:folders[folders.length - 1]})
}
  render() {
    return (
      <div className="folderBlock">
           <TreeView setSelected={this.setSelected} folders={this.state.folders} selected={this.state.selected} /> 
         <View selected={this.state.selected} onDelete={this.onDelete} onCreate={this.onCreate}/>
        </div>
    );
  }
}

export default FolderBlock;

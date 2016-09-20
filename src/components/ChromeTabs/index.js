import React, {Component} from 'react';
import ChromeTab from './ChromeTab';
import './css/chrome-tabs.css';

class ChromeTabs extends Component {
	render(){
		const {
			selectedIndex,
			bills,
			switchBill,
			addBill,
			removeBill,
		} = this.props;

		const tabs = bills.map( (tab,i) =>
					 <ChromeTab 
					 	key={i} 
			 			removeTab={() => removeBill(i)} 
			 			onClick={() => switchBill(i)} 
			 			title={tab.name} 
			 			isCurrent={i === selectedIndex } 
					 />);
		return (
			<div>
				<div className="chrome-tabs-shell">
		            <div className="chrome-tabs" >
		              	{tabs}
		             <div 
		             	className="chrome-tabs-addbtn" 
		             	onClick={() => addBill(tabs.length)}
		             >
		            	+
		            </div>
		            </div>
		           
		            <div className="chrome-shell-bottom-bar"></div>
		        </div>
	        </div>
		)		
	}
}


export default ChromeTabs;
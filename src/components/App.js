import React from 'react';
import TabsContainer from '../containers/TabsContainer';
import ContentContainer from '../containers/ContentContainer';

const App = ({bills}) => {
	const contentList = bills.map((b,i) => {
		return <ContentContainer 
					bill={b} key={b.id} 
					index={i}
				/>
	});
  return (
    <div>
      <TabsContainer />
      {contentList}
    </div>
  )
};

export default App;

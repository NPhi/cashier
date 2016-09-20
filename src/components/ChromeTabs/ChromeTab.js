import React from 'react';
import classNames from 'classnames';

const ChromeTab = ({title,isCurrent,removeTab,onClick}) => {
	return (
        <div className={classNames('chrome-tab',{'chrome-tab-current' : isCurrent})}  >
            <div className="chrome-tab-title" onClick={onClick}>{title !== '' ? title : 'Toa'}</div>
            <div className="chrome-tab-close" onClick={removeTab}></div>
            <div className="chrome-tab-curves">
                <div className="chrome-tab-curves-left-shadow"></div>
                <div className="chrome-tab-curves-left-highlight"></div>
                <div className="chrome-tab-curves-left"></div>
                <div className="chrome-tab-curves-right-shadow"></div>
                <div className="chrome-tab-curves-right-highlight"></div>
                <div className="chrome-tab-curves-right"></div>
            </div>
        </div>
	)
};

export default ChromeTab;
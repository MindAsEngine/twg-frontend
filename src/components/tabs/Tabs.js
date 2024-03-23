import React, { useState } from "react"
import './tabs.scss'

export default function Tabs({ tabs, initial }) {
    const [currentTab, setCurrentTab] = useState(initial || 0);
    return (
        <>
            <ul className="tabs">
                { tabs.map((tab, index) => <li key={index} className={currentTab === index ? 'active' : ''}><button type="button" onClick={() => setCurrentTab(index)}>{tab.title}</button></li>)}
            </ul>
            <div className="tab-content">
                { tabs.map((tab, index) => currentTab === index ? <React.Fragment key={index}>{tab?.component}</React.Fragment> : '') }
                {/* tabs?.filter((tab) => currentTab === tab.id)[0]?.component || 'Ошибка' */}
            </div>
        </>
    )
}
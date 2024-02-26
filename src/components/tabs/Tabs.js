import { useState } from "react"
import './tabs.scss'

export default function Tabs({ tabs, initial }) {
    const [currentTab, setCurrentTab] = useState(initial || 0);
    return (
        <>
            <ul className="tabs">
                { tabs.map((tab) => <li key={tab.id} className={currentTab === tab.id ? 'active' : ''}><button onClick={() => setCurrentTab(tab.id)}>{tab.title}</button></li>)}
            </ul>
            <div className="tab-content">
                { tabs?.filter((tab) => currentTab === tab.id)[0]?.component || 'Ошибка' }
            </div>
        </>
    )
}
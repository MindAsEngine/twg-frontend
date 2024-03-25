import React, { useState } from "react"
import "./style.scss"

export default function EditorLanguageTabs({ tabs, initialtab }) {
    const [currentTab, setCurrentTab] = useState(initialtab || 0);

    return (
        <>
            <div className="languagetabs__tabs">
                {tabs.map((tab, index) => <button type="button" key={index} className={ (index == currentTab) ? "current": "" } onClick={() => setCurrentTab(index)}>{tab.title}</button>)}
            </div>
            <div className="languagetabs__content">
                { tabs.map((tab, index) => currentTab === index ? <React.Fragment key={index}>{tab?.component}</React.Fragment> : '') }
                {/* tabs.map((tab, index) => <button key="index">{tab.title}</button>) */}
            </div>
        </>
    )
}
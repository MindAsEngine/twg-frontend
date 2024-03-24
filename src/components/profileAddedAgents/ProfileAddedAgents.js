import '../profileSection/style.scss'

function AgentCard({ agent }) {
    return (
        <div>
            <img src={agent.img} />
            <p className="profilesection__agentsgrid__title">{agent.firstName || ''} {agent.lastName || ''}</p>
        </div>
    )
}

export default function ProfileAddedAgents({ list }) {
    return (
        <div className="profilesection">
            <p className="profilesection__header">Вы добавили агентов</p>
            <label className="profilesection__agentsgrid">
                {list.map(agent => <AgentCard agent={agent} />)}
            </label>
        </div>
    )
}
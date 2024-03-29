function TeamList(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Team</th>
                    <th>Players</th>
                    <th>Rank</th>
                    <th>Wins</th>
                    <th>Losses</th>
                    <th>Points</th>
                </tr>
            </thead>

            <tbody>
                {props.teams.map((team) => (
                    <tr key={team.id}>
                        <td>{team.name}</td>
                        <td className="player-list">
                            {team.players.map((player) => (
                                <div className="player" key={player.id}>
                                    <img src={player.avatar} alt={player.name} />
                                    <span>{player.name}</span>
                                </div>
                            ))}
                        </td>
                        <td>{team.rank}</td>
                        <td>{team.wins}</td>
                        <td>{team.losses}</td>
                        <td>{team.points}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default TeamList;

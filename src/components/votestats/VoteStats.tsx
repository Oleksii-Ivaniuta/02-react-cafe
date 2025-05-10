import type { Votes } from "../../types/votes";
import styles from "./VoteStats.module.css";

interface VoteStatsProps {
    votes: Votes,
    totalVotes: number,
    positiveRate: number,
}
export default function VoteStats(props: VoteStatsProps) {
    return <div className={styles.container}>
        <p className={styles.stat}>Good: <strong>{props.votes.good}</strong></p>
    <p className={styles.stat}>Neutral: <strong>{props.votes.neutral}</strong></p>
    <p className={styles.stat}>Bad: <strong>{props.votes.bad}</strong></p>
        <p className={styles.stat}>Total: <strong>{props.totalVotes}</strong></p>
        <p className={styles.stat}>Positive: <strong>{props.positiveRate}%</strong></p>
  </div>
  
}
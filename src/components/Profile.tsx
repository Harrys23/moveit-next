import styles from "../styles/components/Profile.module.css"
import { challengesContext } from "../contexts/ChallengesContext";
import { useContext } from "react";

export function Profile() {
	const { level } = useContext(challengesContext)

	return (
		<div className={styles.profileContainer}>
			<img src="https://github.com/Harrys23.png" alt="Matheus Oliveira" />

			<div>
				<strong>Matheus Oliveira</strong>

				<p>
					<img src="icons/level.svg" alt="Level" />
					Level {level}
				</p>
			</div>
		</div>
	)
}
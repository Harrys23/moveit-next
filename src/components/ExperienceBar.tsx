import { useContext } from 'react'
import { challengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/ExperienceBar.module.scss'

export function ExperienceBar() {
	const { currentExperience, experienceToNextLevel } = useContext(challengesContext);

	const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

	return (
		<header className={styles.experienceBar}>
			<span>0 xp</span>
			<div>
				<div style={{ width: `${percentToNextLevel}%` }} />

				<span
					className={styles.currentExperience}
					//desafio para mais tarde, colocar um balãozim envolta do xp atual.
					style={{ left: `${percentToNextLevel}%` }}
				>
					{currentExperience} xp
				</span>
			</div>

			<span>{experienceToNextLevel} xp</span>
		</header>
	)
}
import styles from './TeamMembers.module.css';

const TeamMembers = () => {
  return (
    <p className={styles['team-members']}>
      Developed by{' '}
      <a href='https://github.com/agustindemiddi' target='_blank'>
        Agustín Demiddi
      </a>
      {`, `}
      <a href='https://github.com/atgarcia16' target='_blank'>
        Atilio García
      </a>
      {`, `}
      <span>Daniela Sosa</span>
      {` and `}
      <span>Leandro Gaitán</span>.
    </p>
  );
};

export default TeamMembers;

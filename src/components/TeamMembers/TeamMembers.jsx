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
      <a href='https://github.com/' target='_blank'>
        Daniela Sosa
      </a>
      {` and `}
      <a href='https://github.com/' target='_blank'>
        Leandro Gaitán
      </a>
      .
    </p>
  );
};

export default TeamMembers;

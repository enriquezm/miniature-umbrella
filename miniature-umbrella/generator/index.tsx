import { generateName } from './generateName';
import { useState } from 'react';

import styles from './Generator.module.css'

function Generator() {
    const defaultUser = {
        'uName': 'Loading...',
        'mini_uID': 'Loading...',
        'long_uID': 'Loading...',
      };

    const [user, setUser] = useState(defaultUser);

    return (
        <>
            <button className={styles.button} onClick={() => setUser(generateName)}>Generate</button>
            <p>{user.uName}</p>
            <p>{user.mini_uID}</p>
            <p>{user.long_uID}</p>
        </>
    );
}

export default Generator;
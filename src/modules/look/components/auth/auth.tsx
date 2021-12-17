import { InitContract } from '../../../../utils';
import { Button } from '../button';
import WnearSmallIcon from '@assets/img/wnear-logo.svg';
import styles from './Auth.module.scss';

export function Auth(props: InitContract) {
  const { walletConnection } = props;

  function signIn() {
    console.log(walletConnection.isSignedIn());
    walletConnection.requestSignIn();
  }

  function signOut() {
    walletConnection.signOut();
    window.location.reload();
  }

  return (
    <div className={styles.auth}>
      {!walletConnection.isSignedIn() ? (
        <>
          <Button
            maxHeight={true}
            size="default"
            color="primary"
            onClick={() => signIn()}
            text="Connect wallet"
          />
        </>
      ) : (
        <div className={styles.auth__signed}>
          {walletConnection.getAccountId()}
          <div className={styles.auth__value}>
            <div>
              <img src={WnearSmallIcon} alt="Wnear Icon" />
            </div>
            <p>106.810</p>
          </div>

          <button className={styles.accountIdBtn}>
            NearLend.Testnet
            {/*{walletConnection.getAccountId()}*/}
          </button>

          <Button
            maxHeight={true}
            size="default"
            color="primary"
            onClick={() => signOut()}
            text="Log out"
          />
        </div>
      )}
    </div>
  );
}

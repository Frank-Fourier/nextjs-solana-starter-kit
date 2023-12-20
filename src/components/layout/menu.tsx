import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import classNames from "classnames";

type Props = {
  className?: string;
};

export function Menu({ className }: Props) {
  const { connected } = useWallet();
  const available = false;
  const menuClasses = classNames("menu", className);
  const buttonClasses = classNames(
    "btn-ghost lg:btn mb-1 lg:mr-1 lg:mb-0",
    { "opacity-50 cursor-not-allowed": !available }
  );

  const dronkBalance = 0;

  return (
    <ul className={menuClasses}>
      <li>
        <label
          htmlFor="bonk-modal"
          className={buttonClasses}
          title={!available ? "Coming soon :)" : ""}
        >
          Buy with $Bonk
        </label>
      </li>
      <li>
        <label
          htmlFor="sol-modal"
          className={buttonClasses}
          title={!available ? "Coming soon :)" : ""}
        >
          Buy with SOL
        </label>
      </li>
      {connected && (
        <>
          <li className="tooltip" data-tip={dronkBalance === 0 ? "Where's your $DRONK at?" : ""}>
            <span className="btn-ghost lg:btn mb-1 lg:mr-1 lg:mb-0">
              {dronkBalance.toFixed(2)} $DRONK
            </span>
          </li>
        </>
      )}
      <WalletMultiButton className="btn" />
    </ul>
  );
}

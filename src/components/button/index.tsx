import AddIcon from '../../assets/img/add-icon.svg';
import cn from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps {
    text: string;
    size: "default" | "small";
    color: "primary" | "transparent";
    iconType?: boolean;
    maxHeight?: boolean;
    onClick: () => void;
}

export function Button({text, onClick, size, color, iconType, maxHeight}: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className={cn(color && styles[color], size && styles[size], maxHeight && styles.maxHeight, styles.btn)}
        >
            {iconType &&
                <div className={styles.iconType}>
                    <img src={AddIcon} alt="+"/>
                </div>
            }
            {text}
        </button>
    )
}

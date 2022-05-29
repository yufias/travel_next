import cn from 'classnames'
import styles from './Button.module.css'

type Props = {
    children: string,
    className?: string,
    fullWidth?: boolean,
    outline?: boolean
}

const Button = ({children, className = '', fullWidth, outline}: Props) => {
    return (
        <button className={cn(styles.button, className, {
            [styles.fullWidth]: fullWidth,
            [styles.outline]: outline
        })}>
            {children}
        </button>
    )
}

export default Button
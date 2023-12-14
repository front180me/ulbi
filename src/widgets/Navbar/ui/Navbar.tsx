import {classNames} from "shared/lib/classNames/classNames"
import cls from './Navbar.module.scss'
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink"
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

interface NavbarProps {
    className?: string
}
export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <ThemeSwitcher className={'sdsds'}/>
            <div className={cls.links}>
                <AppLink to="/" theme={AppLinkTheme.SECONDARY} className={cls.mainLink}>Main page</AppLink>
                <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>About</AppLink>
            </div>
        </div>
    )
}

export default Navbar
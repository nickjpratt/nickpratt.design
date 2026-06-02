import { Moon, Sun } from '@phosphor-icons/react'
import { Keycap } from './Keycap'
import { useTheme } from '../theme'

/** Dark/light toggle, presented as a keycap (the toggle's personality, per brief). */
export function KeycapToggle() {
  const { theme, toggle } = useTheme()
  const next = theme === 'dark' ? 'light' : 'dark'

  return (
    <Keycap
      size="sm"
      onClick={toggle}
      aria-label={`Switch to ${next} mode`}
      title={`Switch to ${next} mode`}
    >
      {theme === 'dark' ? (
        <Sun size={15} weight="bold" aria-hidden />
      ) : (
        <Moon size={15} weight="bold" aria-hidden />
      )}
    </Keycap>
  )
}

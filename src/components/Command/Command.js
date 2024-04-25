import { useState } from 'react'
import styles from './Command.module.css'

export default function Command({ name, args }) {
  const [command, setCommand] = useState({ name, args })

  function copy() {
    navigator.clipboard.writeText(`${command.name} ${command.args.join(' ')}`)
  }

  return (
    <div className={styles.CommandContainer}>
      <div className={styles.CommandMain}>
        <b>{name}</b>
        {args.map((arg, index) => (
          <span
            key={index}
            className={styles.CommandArg}
            contentEditable="true"
            suppressContentEditableWarning="true"
            onInput={(e) => {
              const newArgs = [...command.args]
              newArgs[index] = e.currentTarget.textContent
              setCommand({ name: command.name, args: newArgs })
            }}
          >
            {arg}
          </span>
        ))}
      </div>
      <div className={styles.CommandCopy} onClick={copy}>
        Copy
      </div>
    </div>
  )
}

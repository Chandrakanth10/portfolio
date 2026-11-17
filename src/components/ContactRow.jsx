import { Row } from './Row.jsx'
import Chip from './Chip.jsx'
import { profile } from '../content/profile.js'

export default function ContactRow() {
  return (
    <Row label="Find me on">
      <div className="flex flex-wrap gap-[.4rem]">
        {profile.contacts.map((contact) => (
          <Chip key={contact.label} href={contact.href} newTab={contact.newTab}>
            {contact.label}
          </Chip>
        ))}
      </div>
    </Row>
  )
}

import { Request, Response } from 'express'

const handler = async (req: Request, res: Response) => {
  if (
    req.headers['nhost-webhook-secret'] !== process.env.NHOST_WEBHOOK_SECRET
  ) {
    return res.status(401).send('Unauthorized')
  }

  const user = req.body.event.data.new || req.body.event.data.old
  const { ticket, email } = user
  console.log(`TODO: send ticket to ${email}: ${ticket}`)

  res.status(200).send(`OK`)
}

export default handler

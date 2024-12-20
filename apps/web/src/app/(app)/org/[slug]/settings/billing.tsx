import { getCurrentOrg } from '@/auth/auth'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableRow,
} from '@/components/ui/table'
import { getBilling } from '@/http/get-billing'

export async function Billing() {
  const currentOrg = getCurrentOrg()

  const { billing } = await getBilling({ org: currentOrg! })

  return (
    <>
      <Separator />
      <Card>
        <CardHeader>
          <CardTitle>Billing</CardTitle>
          <CardDescription>
            Information about your organization costs
          </CardDescription>

          <CardContent>
            <Table>
              <TableRow>
                <TableHead>Const type</TableHead>
                <TableHead className="text-right" style={{ width: 120 }}>
                  Quantity
                </TableHead>
                <TableHead className="text-right" style={{ width: 200 }}>
                  Subtotal
                </TableHead>
              </TableRow>
              <TableBody>
                <TableRow>
                  <TableCell>Amount of projects</TableCell>
                  <TableCell className="text-right">
                    {billing.project.amount}
                  </TableCell>
                  <TableCell className="text-right">
                    {billing.project.price.toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'USD',
                    })}{' '}
                    (
                    {billing.project.unit.toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'USD',
                    })}{' '}
                    each)
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Amount of seats</TableCell>
                  <TableCell className="text-right">
                    {billing.seats.amount}
                  </TableCell>
                  <TableCell className="text-right">
                    {billing.seats.price.toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'USD',
                    })}{' '}
                    (
                    {billing.seats.unit.toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'USD',
                    })}{' '}
                    each)
                  </TableCell>
                </TableRow>
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell />
                  <TableCell className="text-right">Total</TableCell>
                  <TableCell className="text-right">
                    {billing.total.toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'USD',
                    })}
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </CardContent>
        </CardHeader>
      </Card>
    </>
  )
}

import { useContext } from "react";
import { TransactionContext } from "../../hooks/useTransactions";
import { Container } from "./styles";


export function TransationTable(){
const {transactions} = useContext(TransactionContext)

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th> 
                    </tr>
                </thead>

                <tbody>
                  {transactions.map(transaction => (
                      <tr key={transaction.id}>
                          <td>{transaction.title}</td>
                          <td className={transaction.type}>
                              {new Intl.NumberFormat('PT-BR', {
                                  style: 'currency',
                                  currency: 'BRL'
                              }).format(transaction.amount)}
                          </td>
                          <td>{transaction.category}</td>
                          <td> {new Intl.DateTimeFormat('PT-BR').format(
                              new Date (transaction.createAtDate))}
                          </td>
                      </tr>
                  ))}
                   
                </tbody>
            </table>
        </Container>
    )
}






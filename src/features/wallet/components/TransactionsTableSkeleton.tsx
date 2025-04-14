import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const TransactionsTableSkeleton = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {Array(6)
            .fill("-")
            .map((_, i) => (
              <TableHead key={i}>
                <Skeleton className="h-2" />
              </TableHead>
            ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array(6)
          .fill("-")
          .map((_, i) => (
            <TableRow key={i}>
              <TableCell>
                <Skeleton className="h-2" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-2" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-2" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-2" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-2" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-2" />
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default TransactionsTableSkeleton;

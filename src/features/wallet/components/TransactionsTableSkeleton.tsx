import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const TransactionsTableSkeleton = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Skeleton className="h-9 w-[6rem]" />
          <Skeleton className="h-9 w-[6rem]" />
          <Skeleton className="h-9 w-[6rem]" />
          <Skeleton className="h-9 w-[6rem]" />
        </div>
        <div>
          <Skeleton className="w-[4rem] h-2" />
        </div>
      </div>
      <div className="mt-4">
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
      </div>
    </div>
  );
};

export default TransactionsTableSkeleton;

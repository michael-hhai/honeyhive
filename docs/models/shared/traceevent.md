# TraceEvent


## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `args`                                      | Record<string, *any*>                       | :heavy_minus_sign:                          | Arguments associated with the event.        |
| `cat`                                       | *string*                                    | :heavy_minus_sign:                          | The category of the event.                  |
| `name`                                      | *string*                                    | :heavy_check_mark:                          | The name of the event.                      |
| `ph`                                        | *string*                                    | :heavy_check_mark:                          | The phase of the event.                     |
| `pid`                                       | *number*                                    | :heavy_check_mark:                          | The process ID.                             |
| `tid`                                       | *number*                                    | :heavy_check_mark:                          | The thread ID.                              |
| `ts`                                        | *number*                                    | :heavy_check_mark:                          | The timestamp of the event in microseconds. |
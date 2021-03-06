import Header from "@/comps/layouts/Header";
import { Box, Stat, StatHelpText, StatLabel } from "@chakra-ui/react";
import * as operations from "@psh/schema/dist/operations.gen";
import React from "react";

const App = () => {
    const { client, loading, data } = operations.useMeQuery();
    
    return (
        <div>
            <Header client={client} me={data?.me} />
            <Box>
                {
                    <>
                        <Stat
                            m={5}
                            w={300}
                            border="1px"
                            borderColor="gray.200"
                            borderRadius={5}
                            px={5}
                            py={3}>
                            <StatLabel>{data?.me?.username}</StatLabel>
                            <StatHelpText>{data?.me?.email}</StatHelpText>
                        </Stat>
                    </>
                }
            </Box>
        </div>
    );
};

export default App;

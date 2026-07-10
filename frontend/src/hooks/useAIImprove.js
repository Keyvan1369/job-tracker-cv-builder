import { useState } from "react";
import { improveSection } from "../services/aiService";

export default function useAIImprove() {

    const [loading, setLoading] = useState(false);

    const improve = async (

        section,

        text,

        token

    ) => {

        try {

            setLoading(true);

            const result = await improveSection(

                section,

                text,

                token

            );

            return result;

        }

        catch (err) {

            console.error(err);

            return null;

        }

        finally {

            setLoading(false);

        }

    };

    return {

        improve,

        loading

    };

}
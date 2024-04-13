import { recommend } from "./recommend.js";

describe("recommend function", () => {
    let chosen;

    beforeEach(() => {
        chosen = [
            {
                index: "8",
                name: "Debug",
                graph: {
                    nodes: [
                        {
                            type: "HTML",
                            in: [],
                            out: [0, 1, 2, 3, 4, 5],
                            props: {
                                name: "sites-indexed"
                            }
                        },
                        {
                            type: "Sites",
                            in: [0],
                            out: [],
                            props: {
                                name: "owner"
                            }
                        },
                        {
                            type: "Sites",
                            in: [1],
                            out: [],
                            props: {
                                name: "detail-sites"
                            }
                        },
                        {
                            type: "Page",
                            in: [2],
                            out: [],
                            props: {
                                name: "site-activity"
                            }
                        },
                        {
                            type: "Logs",
                            in: [3],
                            out: [],
                            props: {
                                name: "Now-0000"
                            }
                        },
                        {
                            type: "Window",
                            in: [4],
                            out: [],
                            props: {
                                name: "summary"
                            }
                        },
                        {
                            type: "Window",
                            in: [5],
                            out: [],
                            props: {
                                name: "result"
                            }
                        }
                    ],
                    rels: [
                        { type: "get", from: 0, to: 1, props: { source: "Debug" } },
                        { type: "get", from: 0, to: 2, props: { source: "Debug" } },
                        { type: "open", from: 0, to: 3, props: { source: "Debug" } },
                        { type: "get", from: 0, to: 4, props: { source: "Debug" } },
                        { type: "set", from: 0, to: 5, props: { source: "Debug" } },
                        { type: "set", from: 0, to: 6, props: { source: "Debug" } }
                    ]
                },
                date: 1712704755786
            }
        ];
    });

    it("should pass chosen as an argument to the recommend function", () => {
      recommend(chosen);
    });

});

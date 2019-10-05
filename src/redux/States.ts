
export interface Word {
    word: string,
    defs: WordDefinition[],
    pron: string,
};


export interface WordDefinition {
    def: string,
    trans: string,
    examps: Example[],
};

export interface Example {
    examp: string,
    trans: string,
};
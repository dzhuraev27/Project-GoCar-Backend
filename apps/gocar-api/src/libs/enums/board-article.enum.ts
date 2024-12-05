import { registerEnumType } from '@nestjs/graphql';


export enum BoardArticleCategory {
	FREE = 'FREE',
	RECOMMEND = 'RECOMMEND',
	NEWS = 'NEWS',
	HUMOR = 'HUMOR',
}

export enum BoardArticleStatus {
	ACTIVE = 'ACTIVE',
	DELETE = 'DELETE',
}

registerEnumType(BoardArticleCategory, {
	name: 'BoardArticleCategory',
});

registerEnumType(BoardArticleStatus, {
	name: 'BoardArticleStatus',
});

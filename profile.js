var profile = {
    releaseDir: './dist',
    releaseName: 'lib',
    action: 'release',
    cssOptimize: true,
    mini: true,
    optimize: false,
    layerOptimize: false,
    stripConsole: 'none',
    layers: {
        'layers/dgrid': {
            includeLocales: ['en-us'],
            include: [
				'dgrid/_StoreMixin',
				'dgrid/CellSelection',
				'dgrid/ColumnSet',
				'dgrid/Editor',
				'dgrid/Grid',
				'dgrid/Keyboard',
				'dgrid/List',
				'dgrid/OnDemandGrid',
				'dgrid/OnDemandList',
				'dgrid/Selection',
				'dgrid/Selector',
				'dgrid/Tree',
				'dgrid/extensions/ColumnHider',
				'dgrid/extensions/ColumnReorder',
				'dgrid/extensions/ColumnResizer',
				'dgrid/extensions/CompoundColumns',
				'dgrid/extensions/DnD',
				'dgrid/extensions/Pagination'
            ],
            boot: false,
            customBase: true
        }
    },
    basePath: '.',
    baseDir: '.',
    packages: [
        { name: 'dojo', location: './dojo' },
        { name: 'dgrid', location: './dgrid' },
        { name: 'dijit', location: './dijit' }
    ]
};

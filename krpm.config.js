
module.exports = {
	platforms: ['x86', 'x64'],
	files: [
		['README'],
		['include', 'include/mysql', [
			'mysql.h', 
			'errmsg.h',
			'mariadb_com.h',
			'ma_list.h',
			'mariadb_ctype.h',
			'mariadb_stmt.h',
		]],
		['build_x86/include', 'include/mysql', [
			'mariadb_version.h', 
		]],
	],
	each(krb)
	{
		krb.vsbuild(`build_${krb.platform.shortName}/mariadb-connector-c.sln`, krb.config.name, krb.platform.longName);
		krb.copy(
			`build_${krb.platform.shortName}/libmariadb/${krb.config.name}`,
			`${krb.libExportDir}/${krb.config.name}`, [
				'libmariadb.dll',
				'libmariadb.lib',
				'mariadbclient.lib',
			]);
	}
};

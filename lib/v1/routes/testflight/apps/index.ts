import { AppType } from '../../..'
import {
    BetaAppLocalizationType,
    BetaAppReviewDetailType,
    BetaGroupType,
    BetaLicenseAgreementType,
    BuildType,
    PreReleaseVersionType,
} from '../../../'
import { API, DELETE, GET } from '../../../../api'
import {
    AppBetaAppLocalizationsLinkagesResponse,
    BetaAppLocalizationsResponse,
} from '../beta-app-localizations/types'
import {
    AppBetaAppReviewDetailLinkageResponse,
    BetaAppReviewDetailResponse,
} from '../beta-app-review-detail/types'
import { BetaGroupsResponse } from '../beta-groups/types'
import { BetaLicenseAgreementResponse } from '../beta-license-agreements/types'
import { BuildsResponse } from '../builds/types'
import { PreReleaseVersionsResponse } from '../prerelease-versions/types'
import {
    AppBetaGroupsLinkagesResponse,
    AppBetaLicenseAgreementLinkageResponse,
    AppBetaTestersLinkagesRequest,
    AppBuildsLinkagesResponse,
    AppPreReleaseVersionsLinkagesResponse,
    AppResponse,
    AppsResponse,
} from './types'

/**
 * Find and list apps added in App Store Connect.
 * @param query
 */
export function listApps(
    api: API,
    query: ListAppsQuery
): Promise<AppsResponse> {
    return GET(api, '/apps', { query })
}

/**
 * Get information about a specific app.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
export function readAppInformation(
    api: API,
    id: string,
    query: ReadAppInformationQuery
): Promise<AppResponse> {
    return GET(api, `/apps/${id}`, { query })
}

/**
 * Remove one or more beta testers' access to test any builds of a specific app.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param body
 */
export function removeBetaTestersFromAllGroupsAndAppBuilds(
    api: API,
    id: string,
    body: AppBetaTestersLinkagesRequest
): Promise<void> {
    return DELETE(api, `/apps/${id}/relationships/betaTesters`, { body })
}

/**
 * Get a list of beta groups associated with a specific app.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
export function listAllBetaGroupsForApp(
    api: API,
    id: string,
    query: ListAllBetaGroupsForAppQuery
): Promise<BetaGroupsResponse> {
    return GET(api, `/apps/${id}/betaGroups`, { query })
}

/**
 * Get a list of the beta group resource IDs associated with a specific app.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
export function getAllBetaGroupIDsForApp(
    api: API,
    id: string,
    query: GetAllBetaGroupIDsForAppQuery
): Promise<AppBetaGroupsLinkagesResponse> {
    return GET(api, `/apps/${id}/relationships/betaGroups`, { query })
}

/**
 * Get a list of builds associated with a specific app.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
export function listAllBuildsForApp(
    api: API,
    id: string,
    query: ListAllBuildsForAppQuery
): Promise<BuildsResponse> {
    return GET(api, `/apps/${id}/builds`, { query })
}

/**
 * Get a list of build resource IDs associated with a specific app.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
export function getAllBuildIDsForApp(
    api: API,
    id: string,
    query: GetAllBuildIDsForAppQuery
): Promise<AppBuildsLinkagesResponse> {
    return GET(api, `/apps/${id}/relationships/builds`, { query })
}

/**
 * Get a list of prerelease versions associated with a specific app.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
export function listAllPrereleaseVersionsForApp(
    api: API,
    id: string,
    query: ListAllPrereleaseVersionsForAppQuery
): Promise<PreReleaseVersionsResponse> {
    return GET(api, `/apps/${id}/preReleaseVersions`, { query })
}

/**
 * Get a list of prerelease version IDs for a specific app.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
export function getAllPrereleaseVersionIDsForApp(
    api: API,
    id: string,
    query: GetAllPrereleaseVersionIDsForAppQuery
): Promise<AppPreReleaseVersionsLinkagesResponse> {
    return GET(api, `/apps/${id}/relationships/preReleaseVersions`, { query })
}

/**
 * Get the beta app review details for a specific app.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
export function readBetaAppReviewDetailsResourceForApp(
    api: API,
    id: string,
    query: ReadBetaAppReviewDetailsResourceForAppQuery
): Promise<BetaAppReviewDetailResponse> {
    return GET(api, `/apps/${id}/betaAppReviewDetail`, { query })
}

/**
 * Get the beta app review details resource ID associated with a specific app.
 * @param id An opaque resource ID that uniquely identifies the resource.
 */
export function getBetaAppReviewDetailsResourceIDForApp(
    api: API,
    id: string
): Promise<AppBetaAppReviewDetailLinkageResponse> {
    return GET(api, `/apps/${id}/relationships/betaAppReviewDetail`)
}

/**
 * Get the beta license agreement for a specific app.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
export function readBetaLicenseAgreementForApp(
    api: API,
    id: string,
    query: ReadBetaLicenseAgreementForAppQuery
): Promise<BetaLicenseAgreementResponse> {
    return GET(api, `/apps/${id}/betaLicenseAgreement`, { query })
}

/**
 * Get the beta app review details resource ID associated with a specific app.
 * @param id An opaque resource ID that uniquely identifies the resource.
 */
export function getBetaLicenseAgreementIDForApp(
    api: API,
    id: string
): Promise<AppBetaLicenseAgreementLinkageResponse> {
    return GET(api, `/apps/${id}/relationships/betaLicenseAgreement`)
}

/**
 * Get a list of localized beta test information for a specific app.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
export function listAllBetaAppLocalizationsForApp(
    api: API,
    id: string,
    query: ListAllBetaAppLocalizationsForAppQuery
): Promise<BetaAppLocalizationsResponse> {
    return GET(api, `/apps/${id}/betaAppLocalizations`, { query })
}

/**
 * Get a list of beta app localization resource IDs associated with a specific app.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
export function getAllBetaAppLocalizationIDsForApp(
    api: API,
    id: string,
    query: GetAllBetaAppLocalizationIDsForAppQuery
): Promise<AppBetaAppLocalizationsLinkagesResponse> {
    return GET(api, `/apps/${id}/relationships/betaAppLocalizations`, { query })
}

interface ListAppsQuery {
    filter?: {
        /**
         * Attributes, relationships, and IDs by which to filter.
         */
        bundleId?: string[]
        /**
         * Attributes, relationships, and IDs by which to filter.
         */
        id?: string[]
        /**
         * Attributes, relationships, and IDs by which to filter.
         */
        name?: string[]
        /**
         * Attributes, relationships, and IDs by which to filter.
         */
        sku?: string[]
    }
    /**
     * Relationship data to include in the response.
     */
    include?: (
        | 'betaAppLocalizations'
        | 'betaAppReviewDetail'
        | 'betaGroups'
        | 'betaLicenseAgreement'
        | 'builds'
        | 'preReleaseVersions')[]
    /**
     * Number of resources to return.
     */
    // limit?: number
    /**
     * Attributes by which to sort.
     */
    sort?: (
        | 'bundleId'
        | '+bundleId'
        | '-bundleId'
        | 'name'
        | '+name'
        | '-name'
        | 'sku'
        | '+sku'
        | '-sku')[]
    fields?: {
        /**
         * Fields to return for included related types.
         */
        apps?: AppType[]
        /**
         * Fields to return for included related types.
         */
        betaLicenseAgreements?: BetaLicenseAgreementType[]
        /**
         * Fields to return for included related types.
         */
        preReleaseVersions?: PreReleaseVersionType[]
        /**
         * Fields to return for included related types.
         */
        betaAppReviewDetails?: BetaAppReviewDetailType[]
        /**
         * Fields to return for included related types.
         */
        betaAppLocalizations?: BetaAppLocalizationType[]
        /**
         * Fields to return for included related types.
         */
        builds?: BuildType[]
        /**
         * Fields to return for included related types.
         */
        betaGroups?: BetaGroupType[]
    }
    limit?: {
        /**
         * Number of included related resources to return.
         */
        preReleaseVersions?: number
        /**
         * Number of included related resources to return.
         */
        builds?: number
        /**
         * Number of included related resources to return.
         */
        betaGroups?: number
        /**
         * Number of included related resources to return.
         */
        betaAppLocalizations?: number
    }
}

interface ReadAppInformationQuery {
    fields?: {
        /**
         * Fields to return for included related types.
         */
        apps?: AppType[]
        /**
         * Fields to return for included related types.
         */
        betaLicenseAgreements?: BetaLicenseAgreementType[]
        /**
         * Fields to return for included related types.
         */
        preReleaseVersions?: PreReleaseVersionType[]
        /**
         * Fields to return for included related types.
         */
        betaAppReviewDetails?: BetaAppReviewDetailType[]
        /**
         * Fields to return for included related types.
         */
        betaAppLocalizations?: BetaAppLocalizationType[]
        /**
         * Fields to return for included related types.
         */
        builds?: BuildType[]
        /**
         * Fields to return for included related types.
         */
        betaGroups?: BetaGroupType[]
    }
    /**
     * Relationship data to include in the response.
     */
    include?:
        | 'betaAppLocalizations'
        | 'betaAppReviewDetail'
        | 'betaGroups'
        | 'betaLicenseAgreement'
        | 'builds'
        | 'preReleaseVersions'[]
    limit?: {
        /**
         * Number of included related resources to return.
         */
        preReleaseVersions?: number
        /**
         * Number of included related resources to return.
         */
        builds?: number
        /**
         * Number of included related resources to return.
         */
        betaGroups?: number
        /**
         * Number of included related resources to return.
         */
        betaAppLocalizations?: number
    }
}

interface ListAllBetaGroupsForAppQuery {
    fields?: {
        /**
         * Fields to return for included related types.
         */
        betaGroups?: BetaGroupType[]
    }
    /**
     * Number of resources to return.
     */
    limit?: number
}

interface GetAllBetaGroupIDsForAppQuery {
    /**
     * Number of resources to return.
     */
    limit?: number
}

interface ListAllBuildsForAppQuery {
    fields?: {
        /**
         * Fields to return for included related types.
         */
        builds?: BuildType[]
    }
    /**
     * Number of resources to return.
     */
    limit?: number
}

interface GetAllBuildIDsForAppQuery {
    /**
     * Number of resources to return.
     */
    limit?: number
}

interface ListAllPrereleaseVersionsForAppQuery {
    fields?: {
        /**
         * Fields to return for included related types.
         */
        preReleaseVersions?: PreReleaseVersionType[]
    }
    /**
     * Number of resources to return.
     */
    limit?: number
}

interface GetAllPrereleaseVersionIDsForAppQuery {
    /**
     * Number of resources to return.
     */
    limit?: number
}

interface ReadBetaAppReviewDetailsResourceForAppQuery {
    fields?: {
        /**
         * Fields to return for included related types.
         */
        betaAppReviewDetails?: BetaAppReviewDetailType[]
    }
}

interface ReadBetaLicenseAgreementForAppQuery {
    fields?: {
        /**
         * Fields to return for included related types.
         */
        betaLicenseAgreements?: BetaLicenseAgreementType[]
    }
}

interface ListAllBetaAppLocalizationsForAppQuery {
    fields?: {
        /**
         * Fields to return for included related types.
         */
        betaAppLocalizations?: BetaAppLocalizationType[]
    }
    /**
     * Number of resources to return.
     */
    limit?: number
}

interface GetAllBetaAppLocalizationIDsForAppQuery {
    /**
     * Number of resources to return.
     */
    limit?: number
}
